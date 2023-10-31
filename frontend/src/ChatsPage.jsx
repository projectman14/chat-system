import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='27a54b64-9274-4b31-99b3-9a19ca0b149b'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage