/**
 * Created by днс on 02.11.2017.
 */
export class LSService {
  public setItemToLS = (storageName, item) => {
    localStorage.setItem(storageName, item);
  };
  public getItemFromLS = (storageName) => localStorage.getItem(storageName);



  // public getItemFromLS(storageName){
  //   return localStorage.getItem(storageName);
  // }
  //
  // public setItemToLS(storageName, item){
  //   localStorage.setItem(storageName, item);
  // }

}
