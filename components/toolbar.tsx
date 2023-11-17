"use client"

import { type Editor } from "@tiptap/react"
import{
    Bold,
    Italic,
    List,
    ListOrdered,
    Heading2,
    StrikethroughIcon,
} from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
type Props  = {
    editor: Editor | null
}

export function Toolbar ({ editor }: Props ){
    if (!editor){
        return null
    }

    return (
        <div className="border border-input bg-transparent rounded my-4">
            <Toggle
                size='sm'
                pressed={editor.isActive("heading")}
                onPressedChange={() => editor.chain().focus().toggleHeading({level: 2}).run() }>
                <Heading2 className="h-4 w-4"/>
            </Toggle>
            <Toggle
                size='sm'
                pressed={editor.isActive('Bold')}
                onPressedChange={() => editor.chain().focus().toggleBold().run() }>
                <Bold className="h-4 w-4" />
            </Toggle>

            <Toggle
                size='sm'
                pressed={editor.isActive('heading')}
                onPressedChange={() => editor.chain().focus().toggleItalic().run() }>
                <Italic className="h-4 w-4"/>
            </Toggle>
            <Toggle
                size='sm'
                pressed={editor.isActive('heading')}
                onPressedChange={() => editor.chain().focus().toggleStrike().run() }>
                <StrikethroughIcon className="h-4 w-4" />
            </Toggle>
            <Toggle
                size='sm'
                pressed={editor.isActive('heading')}
                onPressedChange={() => editor.chain().focus().toggleBulletList().run() }>
                <List className="h-4 w-4"/>
            </Toggle>                
            <Toggle
                size='sm'
                pressed={editor.isActive('heading')}
                onPressedChange={() => editor.chain().focus().toggleOrderedList().run() }>
                <ListOrdered className="h-4 w-4" />
            </Toggle>          
        </div>
    )
}
