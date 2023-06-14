'use client';

import { Toast, Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return (
        <Toaster 
            toastOptions={{
                style: {
                    background: '#141414',
                    color: '#fff'                   
                }
            }}
        />
    )
};

export default ToasterProvider;