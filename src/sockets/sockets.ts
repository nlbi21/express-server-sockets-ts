import { Socket } from 'socket.io';


// Disconnect
export const disconnect = (client: Socket) => {
    client.on( 'disconnect' , () => {
        // console.log('Client disconnect');
    });

};

// Recive message
export const message = ( client: Socket, io: SocketIO.Server ) => {
    client.on( 'message' , (payload: { user:string, text: string }) => {
        // console.log(`${payload.user}: ${payload.text}`);
        io.emit('message', payload);
    });
};

// Send message

export const emitMessage = ( client: Socket) => {
    client.on( 'message' , (payload: { user:string, text: string }) => {
        // console.log(`${payload.user}: ${payload.text}`);
    });
};