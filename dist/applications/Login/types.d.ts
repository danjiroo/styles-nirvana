interface FieldValues {
    label: string;
    required: boolean;
    place_holder: string;
    name: string;
    field_type: string;
}
export interface Fields {
    [key: string]: FieldValues;
}
export {};
