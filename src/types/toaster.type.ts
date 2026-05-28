export type ToastVariant = "success" | "error"

export type ToasterItem = {
    id: number
    type: ToastVariant
    message: string
}

export type ShowToast = ( type: ToastVariant, message: string) => void