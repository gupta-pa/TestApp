import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
export interface IListConnectorWebPartProps {
    description: string;
}
export default class ListConnectorWebPart extends BaseClientSideWebPart<IListConnectorWebPartProps> {
    protected _sp: any;
    protected listItems: any;
    render(): void;
    protected onInit(): Promise<void>;
    protected onDispose(): void;
    protected getListItems(): Promise<any>;
}
//# sourceMappingURL=ListConnectorWebPart.d.ts.map