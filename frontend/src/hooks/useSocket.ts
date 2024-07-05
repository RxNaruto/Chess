import { useEffect, useState } from "react"
import WebSocket from "ws";
const WS_URL = "ws://localhost:3000";
export const useSocket=()=>{
    const [socket,setSocket]= useState<WebSocket | null>(null);

    useEffect(()=>{

        const ws = new WebSocket(WS_URL);
        ws.onopen=()=>{
            console.log("connected");
            setSocket(socket);

        }
        ws.onclose=()=>{
            console.log("disconnected");
            setSocket(null);
        }

        return ()=>{
            ws.close();
        }
    },[])

    return socket;
    

}