import React from "react";
import Banner from "../../components/Banner/Banner"
import Features from '../../components/Features/Features.js';
import money from "../../utils/icon-money.png";
import chat from "../../utils/icon-chat.png";
import security from "../../utils/icon-chat.png";

function App() {
  return (
    <div>
      <Banner />
      <section className='features'>
        <Features img={chat} title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."   />
        <Features img={money} title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" />
        <Features img={security} title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe." />
      </section>
    </div>
  );
}

export default App;
