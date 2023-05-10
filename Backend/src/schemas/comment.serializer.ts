import * as yup from "yup";
import { SchemaOf } from "yup";


export const commentReturnedSerializer: SchemaOf<any> = yup.object().shape({
    id: yup.string(),
    comments: yup.array(),
  });