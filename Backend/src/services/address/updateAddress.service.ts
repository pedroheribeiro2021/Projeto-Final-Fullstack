import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entity";
import { IAddressRequest } from "../../interfaces/address/address.interface";


export const updateAddressService = async (addressData: IAddressRequest, addressId:string): Promise<object> => {
    
    const addressRepository = AppDataSource.getRepository(Address)

    const findAddress = await addressRepository.findOneBy({
        id: addressId
    })

    const updateAddress = addressRepository.create({
        ...findAddress,
        ...addressData
    })

    await addressRepository.save(updateAddress)

    return updateAddress
}