import * as React from "react";
import { EditorProps } from 'draft-js'
import {TimePickerProps} from "antd/es/time-picker";
import {IResult} from "@packages/pages/BaseComponent";
import {RadioGroupButtonStyle} from "antd/es/radio/interface";
import {UploadListType, UploadType} from "antd/es/upload/interface";

import {BuiltInControlType, ControlType, ExtendControlType, HooksType, ImageControlType, MediaType} from "braft-editor";

/**
 * button 默认配置
 */
export interface DefaultButtonProps {
    loading: boolean;
    ghost: boolean;
    block: boolean;
    htmlType: string;
}

/**
 * cascader 默认配置
 */
export interface DefaultCascaderProps {
    transitionName: string;
    popupPlacement: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
    options: never[];
    disabled: boolean;
    allowClear: boolean;
}

/**
 * 多选框Group默认
 */
export interface DefaultCheckboxGroupProps {
    options: never[];
}

/**
 * 多选框默认
 */
export interface DefaultCheckboxProps {
    indeterminate: boolean;
}

/**
 * 日期默认参数
 */
interface BaseDateProps {
    allowClear?: boolean;
    className?: string;
    dropdownClassName?: string;
    size?: 'large' | 'small' | 'default';
    style?: React.CSSProperties;
}

/**
 * 日期选择器
 */
export interface DefaultDatePickerProps extends BaseDateProps {
    format?: string[] | string[];
    showTime?: TimePickerProps | boolean;
    showToday?: boolean;
}

/**
 * 年月选择器
 */
export interface DefaultMonthPickerProps extends BaseDateProps {
    format?: string[] | string[];
}

/**
 * 星期选择器
 */
export interface DefaultWeekPickerProps extends BaseDateProps {
    format?: string[] | string[];
}

/**
 * 时间段选择器
 */
export interface DefaultRangePickerProps extends BaseDateProps {
    format?: string[] | string[];
    separator?: string;
    showTime?: TimePickerProps | boolean;
}

/**
 * 分割先默认配置
 */
export interface DefaultDividerProps {
    dashed: boolean;
    style: React.CSSProperties;
    type?: 'horizontal' | 'vertical';
}

/**
 * 表单默认配置
 */
export interface DefaultFormProps {
    layout?: "horizontal" | "vertical" | "inline";
    hideRequiredMark?: boolean;
    labelAlign?: "left" | "right";
    labelWidth?: number;
    itemCol?: number;
    colon?: boolean;
    size?: "small" | "middle" | "large";
}

/**
 * 表单项默认配置
 */
export interface DefaultFormItemProps {
    required?: boolean;
    itemCol?: number;
    labelAlign?: "left" | "right";
    labelWidth?: number;
    colon?: boolean;
}

/**
 * inputGroup 默认属性
 */
export interface DefaultInputGroupProps {
    size?: "small" | "default" | "large";
}

/**
 * input 默认属性
 */
export interface DefaultInputProps {
    allowClear?: boolean;
    size?: "small" | "default" | "large";
}

/**
 * 密码默认属性
 */
export interface DefaultPasswordProps extends DefaultInputProps {

}

/**
 * 搜索默认属性
 */
export interface DefaultSearchProps extends DefaultInputProps {

}

/**
 * 消息
 */
export interface DefaultMessageProps {
    duration?: number;
}

/**
 * 弹出框
 */
export interface DefaultModalProps {
    bodyStyle?: React.CSSProperties;
    maskStyle?: React.CSSProperties;
    okText?: React.ReactNode;
    okType: "link" | "default" | "dashed" | "primary" | "ghost" | "danger";
    cancelText?: React.ReactNode;
    centered?: boolean;
    closeIcon?: React.ReactNode;
    destroyOnClose?: boolean;
    forceRender?: boolean;
    keyboard?: boolean;
    mask?: boolean;
    maskClosable?: boolean;
}

/**
 * 分页器
 */
export interface DefaultPaginationProps {
    hideOnSinglePage?: boolean;
    pageSize?: number;
    pageSizeOptions?: string[];
    showQuickJumper?: boolean | {
        goButton?: React.ReactNode;
    };
    showSizeChanger?: boolean;
    showTotal?: (total: number, range: [number, number]) => React.ReactNode;
    size?: string;
}

/**
 * 单选框组
 */
export interface DefaultRadioGroupProps {
    size?: 'large' | 'default' | 'small';
    buttonStyle?: RadioGroupButtonStyle;
}

/**
 * 下拉框
 */
export interface DefaultSelectProps {
    allowClear?: boolean;
    dropdownClassName?: string;
    dropdownMatchSelectWidth?: boolean;
    dropdownStyle?: React.CSSProperties;
    dropdownMenuStyle?: React.CSSProperties;
    notFoundContent?: string;
    showArrow?: boolean;
    size?: "small" | "default" | "large";
    suffixIcon?: React.ReactNode;
    removeIcon?: React.ReactNode;
    clearIcon?: React.ReactNode;
}

/**
 * 下拉树
 */
export interface DefaultTreeSelectProps {
    allowClear?: boolean;
    dropdownStyle?: React.CSSProperties;
    dropdownMenuStyle?: React.CSSProperties;
    treeIcon?: boolean;
    suffixIcon?: React.ReactNode;
    removeIcon?: React.ReactNode;
    clearIcon?: React.ReactNode;
    size?: 'large' | 'default' | 'small';
}

/**
 * table
 */
export interface DefaultTableProps {
    bodyStyle?: React.CSSProperties;
    className?: string;
    bordered?: boolean;
    filterIcon?: React.ReactNode | ((filtered: boolean) => React.ReactNode);
}

export interface DefaultUploadProps {
    type?: UploadType;
    multiple?: boolean;
    action?: string;
    accept?: string;
    showUploadList?: boolean;
    listType?: UploadListType;
    className?: string;
    disabled?: boolean;
    withCredentials?: boolean;
    dealData?: (data: IResult) => any;
}

export interface DefaultEditorProps {
    controls?: ControlType[];
    media?: MediaType;
    excludeControls?: BuiltInControlType[];
    extendControls?: ExtendControlType[];
    imageControls?: ImageControlType[];
    colors?: string[];
    fontSizes?: number[];
    fontFamilies?: { name: string; family: string }[];
    lineHeights?: number[];
    textAligns?: ('left' | 'center' | 'right' | 'justify')[];
    letterSpacings?: number[];
    emojis?: string[];
    draftProps?: EditorProps;
    hooks?: HooksType;
}

