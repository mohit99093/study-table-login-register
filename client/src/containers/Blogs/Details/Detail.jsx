import React from "react";
import "./Detail.scss";

export default function Detail() {
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <div className="nav1">
        <a href="/">
          STUDY<span>table </span>{" "}
        </a>
      </div>
      <div className="det">
        <div>
          <h4>About Us</h4>
          <p>
            Founded in 1998 by Mark Gorton, Tower Research Capital is a trading
            and technology company that has built some of the fastest, most
            sophisticated electronic trading platforms in the world.
          </p>
        </div>
        <div>
          <h4>Our Founder</h4>
          <p>
            In addition to Tower, Mark has launched a diverse constellation of
            companies and green advocacy organizations including LimeWire and
            OpenPlans. Prior to founding Tower, Mark worked as a fixed income
            proprietary trader at Credit Suisse First Boston. He began his
            career as an engineer at Martin Marietta, specializing in digital
            signal processing and speech recognition. Mark graduated from Yale
            University with a B.S. in electrical engineering and earned an M.S.
            in electrical engineering from Stanford University and an M.B.A.
            from Harvard Business School
          </p>
        </div>
        <div>
          <h4>What we do</h4>
          <p>
            Our internal trading teams are independent from one another,
            enjoying autonomy while accessing shared technology resources such
            as hardware, software, and connectivity as well as resources such as
            business management, legal, compliance, and risk management. At the
            heart of operations is our core engineering team, which owns the
            architecture, implementation and optimization of the trading
            platform itself. This includes developing systems and tools to
            access market data, perform trend analysis, run trading simulations,
            order entry and management, real-time trade support, risk management
            and post-trade services. Working together, our organization builds
            technology and deploys our diverse automated and quantitative
            strategies across a broad range of asset classes in global markets
            around the clock.
          </p>
        </div>
        <div>
          <h4>Our Culture</h4>
          <p>
            The greatest perk about working at Tower is having the freedom and
            opportunity to use your talent.
            <br /> Entrepreneurial spirit is embedded in our DNA. Working here
            means that in collaboration with the bright minds around you, you
            will be expected to tackle challenges old and new by thinking anew
            and learning at every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
}
