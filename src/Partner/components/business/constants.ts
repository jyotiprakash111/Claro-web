import * as yup from "yup";

export const BusinessInfoSchema = yup.object().shape({
    businessName: yup.string().required(),
    businessTypeId: yup.string().optional(),
});


export const AdditionalBusinessInfoSchema = yup.object().shape({
    classes: yup.string().required(),
    tools: yup.string().optional(),
    paintPoint: yup.string().optional(),
    source: yup.string().optional()
});