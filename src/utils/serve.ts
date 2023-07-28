const aircode = import.meta.env.VITE_SERVER_URL

export const apiList = {
  getAllList: aircode + '/getAllList',
  getItem: aircode + '/getItem',
  addOption: aircode + '/addOption',
  removeItem: aircode + '/removeItem',
  removeItems: aircode + '/removeItems',
  getList: aircode + '/getList',
  addItem: aircode + '/addItem',
  editItem: aircode + '/editItem',
}
