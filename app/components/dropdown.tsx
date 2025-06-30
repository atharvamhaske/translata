"use client"

interface DropdownProps {
    name: string;
    value: string;
    languageForm: (value: string) => void;
}

export const Dropdown = ({ name, value, languageForm }: DropdownProps) => {
    return (
        <select name={name}
            className="rounded-md border-gray-300 border bg-white px-3 py-2
         focus:ring-blue-200 focus:border-blue-500 w-32 text-gray-700 z-10 relative"
            value={value}
            onChange={(e) => languageForm(e.target.value)}
        >
            {languages.map((lang) => {
                return <option key={lang.value} value={lang.value}>{lang.label}</option>
            })
            }
        </select>
    )
}

type langOptions = {
    value: string,
    label: string
}[]

const languages: langOptions = [
    {
        value: "eng",
        label: "English"
    }, {
        value: "mar",
        label: "Marathi"
    }, {
        value: "hin",
        label: "Hindi"
    }, {
        value: "sp",
        label: "Spanish"
    }, {
        label: "German",
        value: "gm"
    }, {
        label: "Kannada",
        value: "kn"
    }, {
        label: "Telugu",
        value: "tg"
    }
]