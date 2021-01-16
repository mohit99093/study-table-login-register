import React from 'react'
import './Grid.scss'

export default function Grid() {
    return (
        <div className="grids" >
            <div className="sec" >
                <div className="section" >
                    <div className="s1" >
                       The best advice comes from your peers
                    </div>
                    <div className="s2" >
                       Inspire and get inspired
                    </div>
                    <div className="s3" >
                       If someone hasn’t answered it on Google
                    </div>
                    <div className="s4" >
                       We do a lot of homework
                    </div>
                </div>
                <div className="content">
                    <div className="para" >
                        <h1>Offsites</h1>
                        <div>
                            We take 2 days off every 6 months with our entire portfolio and select LPs.
                            Founders form teams to comment on strategies of other companies. The best advice 
                            comes from your peers, as they say.
                        </div>
                    </div>
                    <div className="para" >
                       <h1>Get-togethers</h1>
                       <div>
                       Every month we get together informally around some industry experts and discuss topics of interest over cocktails. 
                       Founders catch up, exchange war stories, inspire and get inspired. And yes, we also have the plain old workshops.
                       </div>
                    </div>
                    <div className="para" >
                       <h1>Peer Groups</h1>
                       <div>
                       We have an active peer group on Whatsapp where founders solve problems for each other and also exchange knowledge and insights.
                       If someone hasn’t answered it on Google yet, you might find it here. You also discover what to read, listen or watch.
                       </div>
                    </div>
                    <div className="para" >
                        <h1>Engagement</h1>
                        <div>
                        We don’t call it ‘Board Meeting’. We do a lot of homework before meeting our founders. We help founders identify the right things to
                        measure, and the right things to spend time on. Founders think of us as friends and mentors, not as ‘Directors’.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
