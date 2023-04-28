import { Request, Response } from "express"
import { IAddressRequest } from "../../interfaces/address/address.interface";
import { updateAddressService } from "../../services/address/updateAddress.service";


export const updateAddressController = async (req: Request, res: Response) => {

    const addressData: IAddressRequest = req.body
    const id: string = req.params.id
    const updateUser = await updateAddressService(addressData, id)
    return res.status(200).json(updateUser)
};