import * as React from 'react';
import * as ReactDom from 'react-dom';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import ListConnector from './components/ListConnector';
import { IListConnectorProps } from './components/IListConnectorProps';

import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export interface IListConnectorWebPartProps {
  description: string;
}

export default class ListConnectorWebPart extends BaseClientSideWebPart<IListConnectorWebPartProps> {

  protected _sp:any;
  protected listItems:any;

  public render(): void {
    const element: React.ReactElement<IListConnectorProps> = React.createElement(
      ListConnector,
      {
        listItems:this.listItems
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    this._sp = spfi().using(SPFx(this.context));
    this.listItems = await this.getListItems();
    return super.onInit();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected async getListItems(){
    const items = await this._sp.web.lists.getByTitle("sample").items();
    return items;
  }
}
