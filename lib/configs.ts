import { Code, Image, LayoutDashboardIcon, MessageSquare, Music, Settings, SquareDashedBottom, VideoIcon } from "lucide-react"

const appConfig = {
    routes: {
        dashboard: '/dashboard',
        auth: {
            signIn: '/sign-in',
            signUp: '/sign-up'
        }
    },
    images: {
        logo: '/logo.png'
    },
    sidebar:[
        {
            name: 'Dashboard',
            link: '/dashboard',
            color: 'blue-500',
            Icon: LayoutDashboardIcon
        },
        {
            name: 'Conversation',
            link: '/conversation',
            color: 'purple-500',
            Icon: MessageSquare
        },
        {
            name: 'Image Generation',
            link: '/image-generation',
            color: 'pink-500',
            Icon: Image
        },
        {
            name: 'Video Generation',
            link: '/video-generation',
            color: 'orange-500',
            Icon: VideoIcon
        },
        {
            name: 'Music Generation',
            link: '/music-generation',
            color: 'blue-500',
            Icon: Music
        },
        {
            name: 'Code Generation',
            link: '/code-generation',
            color: 'blue-500',
            Icon: Code
        },
        {
            name: 'Setting',
            link: '/setting',
            color: 'white',
            Icon: Settings
        }
    ]
}

export default appConfig
