import ArtList, {ArtListProps, IData} from "./index";
import axios from "../../utils/axios";

export default class WebPageList extends ArtList {

  //总记录数
  protected allBeans: IData[];

  constructor(props: ArtListProps) {
    super(props);
  }

  /**
   * 获得所有数据
   * @returns {IData[]}
   */
  public getAllBeans(): IData[] {
    return this.allBeans
  }

  /**
   * 查询方法
   */
  protected query(): void {
    let ajaxConfig = this.props.ajax;
    ajaxConfig.data = this.param;
    axios(ajaxConfig).then((result: any) => {
      this.callback(result);
    });
  }

  /**
   * 请求结果回调
   */
  protected callback(result: any): void {
    if (result.returnCode == 0) {
      this.allBeans = result.beans;
      this.setState({
        totalCount: this.allBeans ? this.allBeans.length : 0,
        beans: this.allBeans ? this.allBeans.slice((this.pagerNumber - 1) * this.pagerSize, this.pagerNumber * this.pagerSize) : []
      });
    }
  }

  /**
   *发生改变时，触发的方法
   */
  protected onChange(page: number, pageSize: number): void {
    this.pagerNumber = page;
    this.pagerSize = pageSize;
    this.setState({
      beans: this.allBeans ? this.allBeans.slice((this.pagerNumber - 1) * this.pagerSize, this.pagerNumber * this.pagerSize) : []
    })
  }

}
