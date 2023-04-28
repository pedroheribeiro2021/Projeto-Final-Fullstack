import { IAddressUpdate } from "../../types/editAddress/editAddressInterface"
import { api } from "../api"
import { SearchUserId } from "../user/userApi"


export const EditAddress = async (data:IAddressUpdate) => {

    await SearchUserId()
    const token = localStorage.getItem('token')
    const addressId = localStorage.getItem('id_address')

    try {
        await api.patch(`/user/address/${addressId}`, data, {
            headers: {Authorization:'Bearer ' + token}
        })
        .then((resp: object) => console.log(resp))
        localStorage.removeItem('id_address');
    } catch (error) {
        console.log(error)
    }
}