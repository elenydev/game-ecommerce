import SocketIO from 'socket.io'
let io;

export default {
  init: httpServer => {
    io = new SocketIO(httpServer)
    return io
  },
  getIO: () =>{
    if(!io){
      throw new Error('Socket not initialized')
    }
    return io
  }
}