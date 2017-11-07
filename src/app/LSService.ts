/**
 * Created by днс on 02.11.2017.
 */
export class LSService {
  public setItemToLS = (storageValue, item) => {
    localStorage.setItem(storageValue, item);
  };
  public getItemFromLS = (storageValue) => localStorage.getItem(storageValue);
}
