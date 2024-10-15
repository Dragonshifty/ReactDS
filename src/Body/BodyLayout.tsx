import { AudioPlayer } from "../audio/AudioPlayer";

export const BodyLayout = () => {
    return (
        <div>
            <div className="container mt-3">
                <h3 className="mb-3 text-light">Tracks</h3>
                <div className="border border-primary p-5">
                    <h2 className="text-primary">Call To Me</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 text-primary">
                        <div className="col border border-primary p-3">
                            <div className="d-flex col-12">
                                <div className="p-2">
                                    <img
                                        className="shadow border"
                                        src="../images/Call To Me Female.jpg"
                                        height="140"
                                        width="140"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3">
                                    <p>Call To Me Female</p>
                                </div>
                                <AudioPlayer
                                    src="../music/Call To Me Female.mp3" // Path to your audio file
                                    title="Call To Me Female"
                                />
                            </div>
                        </div>

                        <div className="col border border-primary p-3">
                            <div className="d-flex col-12">
                                <div className="p-2">
                                    <img
                                        className="shadow border"
                                        src="../images/Call To Me Male.jpg"
                                        height="140"
                                        width="140"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3">
                                    <p>Info</p>
                                </div>
                                <AudioPlayer
                                    src="../music/Call To Me Male.mp3" // Path to your audio file
                                    title="Call To Me Male"
                                />
                            </div>
                        </div>
                        {/* <div className="col border border-primary p-3">
                            Three
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

// export const BodyLayout = () => {
//     return (
//         <div>
//             <div className="container mt-3">
//                 <h3 className="mb-3 text-light">Tracks</h3>
//                 <div className="border border-primary p-5">
//                     <h2 className="text-primary">Call To Me</h2>
//                     {/* Adjusting to 3 columns for medium (md) and larger screens */}
//                     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 text-primary">
//                         {/* First Column */}
//                         <div className="col border border-primary p-3">
//                             <div className="d-flex">
//                                 <div className="p-2">
//                                     <img
//                                         className="shadow border"
//                                         src="../images/Call To Me Female.jpg"
//                                         height="100"
//                                         width="100"
//                                         alt="Call To Me Female"
//                                     />
//                                 </div>
//                                 <div className="p-3">
//                                     <p>Call To Me Female</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Second Column */}
//                         <div className="col border border-primary p-3">
//                             <div className="d-flex">
//                                 <div className="p-2">
//                                     <img
//                                         className="shadow border"
//                                         src="../images/Call To Me Male.jpg"
//                                         height="100"
//                                         width="100"
//                                         alt="Call To Me Male"
//                                     />
//                                 </div>
//                                 <div className="p-3">
//                                     <p>Call To Me Male</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Third Column */}
//                         <div className="col border border-primary p-3">
//                             <p>Three</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
