import {
    DefaultButtonProps,
    DefaultCascaderProps,
    DefaultCheckboxGroupProps,
    DefaultCheckboxProps,
    DefaultDatePickerProps,
    DefaultMonthPickerProps,
    DefaultWeekPickerProps,
    DefaultRangePickerProps,
    DefaultDividerProps,
    DefaultFormProps,
    DefaultFormItemProps,
    DefaultInputGroupProps,
    DefaultInputProps,
    DefaultPasswordProps,
    DefaultSearchProps,
    DefaultMessageProps,
    DefaultModalProps,
    DefaultPaginationProps,
    DefaultRadioGroupProps,
    DefaultSelectProps,
    DefaultTreeSelectProps, DefaultTableProps, DefaultUploadProps, DefaultEditorProps
} from "@packages/config/DefaultPropsConfig";

export interface IDefaultProps {
    button?: DefaultButtonProps;
    cascader?: DefaultCascaderProps;
    checkboxGroup?: DefaultCheckboxGroupProps;
    checkbox?: DefaultCheckboxProps;
    datePicker?: DefaultDatePickerProps;
    monthPicker?: DefaultMonthPickerProps;
    weekPicker?: DefaultWeekPickerProps;
    rangePicker?: DefaultRangePickerProps;
    divider?: DefaultDividerProps;
    form?: DefaultFormProps;
    formItem?: DefaultFormItemProps;
    inputGroup?: DefaultInputGroupProps;
    input?: DefaultInputProps;
    password?: DefaultPasswordProps;
    search?: DefaultSearchProps;
    message?: DefaultMessageProps;
    modal?: DefaultModalProps;
    pagination?: DefaultPaginationProps;
    radioGroup?: DefaultRadioGroupProps;
    select?: DefaultSelectProps;
    selectTree?: DefaultTreeSelectProps;
    table?: DefaultTableProps;
    upload?: DefaultUploadProps;
    editor?: DefaultEditorProps;
}

export interface IComponentConfig {
    defaultProps: IDefaultProps;
    assign: (option: IDefaultProps) => void;

}

const ComponentConfig: IComponentConfig = {
    defaultProps: {},
    assign: function (option: IDefaultProps): void {
        this.defaultProps = Object.assign(this.defaultProps, option);
    }
};


export default ComponentConfig;

