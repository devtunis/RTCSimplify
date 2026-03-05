 
import CardTutorials from "../../Components/Tutorials/CardTutorials"
import "./Vanilla.css"
const Vanilla = () => {
  return (
    <>  
  

    <div className="Vanilla">
  <h1 class="sexy-link">
    <a href="https://github.com/nahdi-FlowRtc/demoVanilla" target="_blank">
      Source code here
    </a>
  </h1>
       <CardTutorials 
        videoImage={"/tutorials/pictuers/webrtc1.png"} 
        linkvideo={"https://res.cloudinary.com/dfmdgsiid/video/upload/v1772709675/part1_initaialze_zq3p54.mp4"} 
        description={"Intialize Peer & Setup environment"} 
        shortExplantion={"Initialize FlowRTC and create a Peer to start a WebRTC connection."}
        infoSteps={[
        "Intialize Peer",
        "npm init -y",
        "npm i nahdi-flowrtc()",
        "call class PeerSetup"
       ]}
     

        />

        <CardTutorials 
        shortExplantion ={"Create an SDP offer to start the WebRTC connection and send it to the remote peer through the signaling server."}
        videoImage={"/tutorials/pictuers/createoffer.png"} 
        linkvideo={"https://res.cloudinary.com/dfmdgsiid/video/upload/v1772673033/createOffer_bschcn.mp4"} 
        description={"connection and generate an SDP offer."} 
        infoSteps={[
        "CreateOffer()",
        "code(offer)"
       ]}
     

        />


    
      <CardTutorials 
            videoImage={"/tutorials/pictuers/createAnswer.png"} 
            linkvideo={"https://res.cloudinary.com/dfmdgsiid/video/upload/v1772673137/createAnswer_kdpn1h.mp4"} 
            shortExplantion={"Generate the response for an incoming WebRTC offer."}
            description={"Handle the remote answer"} 
            infoSteps={[
            "Use setRemoteDescription(offer)",
            "Call createAnswer() ",

          ]} />

      <CardTutorials 
                  videoImage={"/tutorials/pictuers/handelRemoteDesc.png"} 
                  linkvideo={"https://res.cloudinary.com/dfmdgsiid/video/upload/v1772714168/ice_wk2mr2.mp4"} 
                  shortExplantion={"Learn how to handle ICE candidates in WebRTC ."}
                  description={"Exchange ICE candidates to establish the peer-to-peer connection."} 
                  infoSteps={[
                     "Listen for ICE events",
                    "Send candidates via signaling",
                    "Add remote ICE candidates"
                ]} 
                />

     
          <CardTutorials 
          videoImage={"/tutorials/pictuers/esablishConnection.png"} 
          linkvideo={"https://res.cloudinary.com/dfmdgsiid/video/upload/v1772712275/establishConnection_si2nru.mp4"} 
          shortExplantion={"Learn how to handle an incoming WebRTC answer from the offer."}
          description={"Generate the response for an incoming WebRTC offer."} 
          infoSteps={[
            "Use esablishConnection(answer)",
            "uncode(answer)"
        
          ]} 
        />

   

        </div>
    
   
    </>
  )
}

export default Vanilla

/// put like to each video
