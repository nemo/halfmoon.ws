import React, { Component } from 'react';
import Container from '../../Components/Container'
import Principle from '../../Components/Principle'

import './index.css';

export default class PrinciplesPage extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Container>
            <h1 className='text-center' id='principles'>Principles</h1>

            <p>For the past few months, I’ve been on a somewhat lonely journey of deciding how to live. For many years in my life, I had attempted to live a pathway that felt right but wasn’t intentional.</p>

            <p>In an attempt to truly enjoy my human experience – I’ve set out to build a set of principles that I’d like to live by. If you know me, some of these might feel familiar to you, and some of them might shock you.</p>

            <p>Putting them into words has been one of the most fulfilling exercises I’ve gone through as a human, and sharing them with my friends will hopefully challenge every part of them.</p>

            <p>If you agree with them, I’d like to hear from you. If you disagree with them, I’d like to debate with you. </p>
          </Container>
        </section>
        <Principle name='integrity-over-individuality'>
          <Principle.Title>
            Integrity over Individuality
          </Principle.Title>
          <p>It’s become clear to me that it’s paramount that I can put trust in the words I deliver to my friends, colleagues, and the community around me. It seems to have become a rare characteristic in the average person I tend to interact with, and it's not something I'd like to adhere to. </p>
          <Principle.Content>
            <p>
              <strong>I value my word, and expect others to as well.</strong> I will forgo immediate and short-term pleasure in order to stay true to my word.
            </p>

            <p>There will always be scenarios that may be appropriate to break my word, but in these scenarios I should always precede with an apology and proper communication as to why I wasn’t able to keep my word.</p>
          </Principle.Content>

        </Principle>
        <Principle name='home-is-planet-earth'>
          <Principle.Title>
            Home is Planet Earth
          </Principle.Title>

          <p>I’ve been fortunate enough to be part of 3 different cultures in my life so far in a real and meaningful way. I’m an Iranian – born and raised in Tehran until I was 15. I’m a Canadian citizen and lived in Toronto and Montreal from 15 until I was 23, and I’ve opted into being part of the American Dream ever since. And there are many more I’d like to be a part of.</p>
          <p>Furthermore, there are a unique set of realities in the world that make it possible to live a multi-city life without dimension the depth and strength of relationships one can build otherwise.</p>

          <Principle.Content>
            <p><strong>I will live in 2-3 cities at a time and split my time according to my interests in each city. My home is planet Earth.</strong></p>
            <p>Given that anyone can work remotely (at least in my field), and that it’s possible to create a network of timeshares with friends and family with the help of software and communication tools, and that travel has become just cheap enough – I’m choosing to opt into a distributed lifestyle. I will keep close friendships, physical, emotional, and financial ties in each of the cities in which I reside in.</p>
          </Principle.Content>
        </Principle>

        <Principle name='emotions-are-reasonable'>
          <Principle.Title>Emotions and Reason are Compatible</Principle.Title>
          <p>To get the most out of the human experience, it’s foolish to suppress emotions and let logic dictate every life decision. Though humans (and myself especially) are capable of doing this, it’s a limited way to live an otherwise much more interesting and fulfilling life if emotions are entangled in decisions from time to time.</p>
          <Principle.Content>
            <p><strong>How I feel should be seriously weighted in decision making.</strong> When it comes to matters of the heart, family, and friends – how I feel should be part of the decision making process instead of what a purely logical and reasonable response might be.</p>

            <p>I will willingly open myself up to feel more deeply in order to understand how I feel about any situation as part of the decision making process (instead of attempting to purely reason through).</p>

            <p>Emotions and reasons are compatible, so long as I use my emotions as a strong input when making reason-based decisions.</p>
          </Principle.Content>
        </Principle>


        <Principle name='power-through-knowledge'>
          <Principle.Title workInProgress>
            Power through Knowledge, not Capital
          </Principle.Title>
          <p>Humanity has falsely tied its individual success metric to the economical system (as consumerism requires it to), but it doesn’t seem to be the best way to achieve tranquility or long-term fulfillment in one's life.</p>

          <p>I've found it that acquiring knowledge and being intellectually curious to be far more fulfilling than achieving highly capitalistic goals. Furthermore, I’ve found that I feel much more powerful having more knowledge compared to having more capital.</p>

          <Principle.Content>
            <p><strong>When given the option, choose acquiring knowledge over acquiring capital.</strong> I will willingly avoid acquiring more capital, growing quicker, or accepting a better monetary offer if the likelihood of my personal intellectual growth is hindered by it.</p>

            <p>Timeframe is of importance, of course. The calculation should be made with the following in mind:</p>

            <ul>
              <li>
                <p>First 30-40 years of my life should primarily be towards building intellect. Through information, interactions, and experiences. Learning how to learn should be the first priority, as learning shouldn't stop but become a habit and ongoing practice past this first stage.</p>
              </li>
              <li>
                <p>Capitalistic success will help with enabling me to learn more, so it should be considered that if within a reasonable timeline (2-5 years) there will be a step function difference in my personal freedom then I should commit to that task.</p>
              </li>
              <li>
                <p>Building a company in itself is a learning vessel, and an exercise of understanding human behavior and economical behavior.</p>
              </li>
            </ul>
          </Principle.Content>
        </Principle>

        <Principle name='moral-absolutes'>
          <Principle.Title workInProgress>
            My World Has Moral Absolutes
          </Principle.Title>

          <p>It’s a rather easy argument to make that there are no blanket true moral absolutes. All the privileges, rights, and abilities we have in the 21st century (some of us more than others) were created and decided on in humanity’s common imagination over centuries of conflict. All rights are debatable, all rules are breakable.</p>

          <p>But that doesn’t mean that there aren’t some of which I truly agree with and would like to live by to consider myself a righteous human.</p>
          <Principle.Content>
            <p><strong>I will have a life-long pursuit to define moral absolutes for myself in a thoughtful, intentional, and systematic way.</strong></p>

            <p>It would be rather naive of me to assume that I already know what all my moral absolutes are, and attempt to write them down in a simple document like this. It’s far more realistic to attempt to arrive at such a list through rigorous debate, learning, and understanding over likely a multi-decade period. That’s my commitment.</p>
          </Principle.Content>
        </Principle>

      </div>
    );
  }
}
