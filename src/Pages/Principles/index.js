import React, { Component } from 'react';
import Container from '../../Components/Container'
import OperatingModel from '../../Components/OperatingModel'
import Principle from '../../Components/Principle'

import './index.css';

export default class PrinciplesPage extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Container>
            <h1 className='text-center' id='principles'>Principles</h1>
            <p>A while back I decided to embark on a journey that would give me a framework for living. For many years in my life, I had attempted to live a pathway that felt right but wasn’t intentional – this is an attempt to change that.</p>

            <p>In an attempt to truly enjoy my human experience – I’ve set out to build a set of principles. The fundamental criteria for these principles are that they are truisms which are rooted in science, humanity’s collective imagination, or I feel a strong personal pull towards based on my philosophies.</p>

            <p>As I discover these principles over time, I will update and share what I’m calling “operating models” that take these principles into account and makes it apparent how they shape my daily lifestyle.</p>
          </Container>
        </section>

        <Principle number={1}>
          <p>
            The nature of life is its continual struggle to survive, first as the self, and then as the species — We are biologically designed to be fulfilled by being part of this struggle.
          </p>
        </Principle>

        <Principle number={2}>
          <p>
            Humanity’s collective imagination behaves like a replicator in that ideas spread, and are passed on future generations if they’re successful — Being part of adding or removing concepts in the collective imagination can have a multi-generational impact.
          </p>
        </Principle>

        <Principle number={3}>
          <p>
            Information complexity and connective are rapidly increasing over time — Attempting to slow this down is futile, but we should acquire enough knowledge to be able to help shape its fundamentals.
          </p>
        </Principle>

        <section>
          <Container>
            <h1 className='text-center' name='operating-models' id='operating-models'>Operating Models</h1>

            <p>The principles above are meant to help me define some guidelines on how I'd like to live my life. The following are lifestyle operating models that which adhere to those principles and that I practice.</p>
          </Container>
        </section>
        <OperatingModel name='word-integrity'>
          <OperatingModel.Title>
            Word Integrity
          </OperatingModel.Title>
          <p>It’s become clear to me that it’s paramount that I can put trust in the words I deliver to my friends, colleagues, and the community around me. I want to adhere to this as it seems to have become a rare characteristic in the average person in my life.</p>
          <OperatingModel.Content>
            <p>
              <strong>I value my word and expect others to as well.</strong> I will forgo immediate and short-term pleasure to stay true to my word.
            </p>

            <p>There will always be scenarios that may be appropriate to break my word, but in these scenarios, I should always precede with an apology and proper communication as to why I wasn’t able to keep my word.</p>
          </OperatingModel.Content>

        </OperatingModel>
        <OperatingModel name='home-is-planet-earth'>
          <OperatingModel.Title>
            Home is Planet Earth
          </OperatingModel.Title>

          <p>I’ve been fortunate enough to be part of 3 different cultures in my life so far in a real and meaningful way. I’m an Iranian – born and raised in Tehran until I was 15. I’m a Canadian citizen and lived in Toronto and Montreal from 15 until I was 23, and I’ve opted into being part of the American Dream ever since.</p>
          <p>Furthermore, there are a unique set of realities in the world that make it possible to live a multi-city life without diminishing the depth and strength of relationships one can build otherwise.</p>

          <OperatingModel.Content>
            <p><strong>I will live in 2-3 cities at a time and split my time according to my interests in each town. My home is planet Earth.</strong></p>
            <p>Given that anyone can work remotely (at least in my field), and that it’s possible to create a network of timeshares with friends and family with the help of software and communication tools, and that travel has become just cheap enough – I’m choosing to opt into a distributed lifestyle. I will keep close friendships, physical, emotional, and financial ties in each of the cities in which I reside.</p>
          </OperatingModel.Content>
        </OperatingModel>

        <OperatingModel name='emotions-are-reasonable'>
          <OperatingModel.Title>Emotions and Reason are Compatible</OperatingModel.Title>
          <p>For the optimal human experience, it’s foolish to suppress feelings and let logic dictate every life decision. Though humans (and myself especially) are capable of doing this, it’s a limited way to live an otherwise much more exciting and fulfilling life if emotions are considered in decisions from time to time.</p>
          <OperatingModel.Content>
            <p><strong>How I feel should be critically weighted in decision making.</strong> When it comes to matters of the heart, family, and friends – how I feel should be part of the decision-making process instead of what a purely logical and reasonable response might be.</p>

            <p>I will willingly open myself up to feel more deeply to understand how I feel about any situation as part of the decision-making process (instead of attempting to reason through purely).</p>

            <p>Emotions and reasons are compatible, so long as I use my feelings as an active input when making reason-based decisions.</p>
          </OperatingModel.Content>
        </OperatingModel>


        <OperatingModel name='power-through-knowledge'>
          <OperatingModel.Title workInProgress>
            Power through Knowledge, not Capital
          </OperatingModel.Title>
          <p>Humanity has falsely tied its success metric to the economic system (as consumerism requires it to), but it doesn’t seem to be the best way to achieve tranquility or long-term fulfillment in one's life.</p>

          <p>I've found it that acquiring knowledge and being intellectually curious to be far more fulfilling than achieving highly capitalistic goals. Furthermore, I’ve found that I feel much more powerful having more knowledge compared to having more capital.</p>

          <OperatingModel.Content>
            <p><strong>When given the option, choose to acquire knowledge over acquiring capital.</strong> I will willingly avoid pursuing more capital, growing quicker, or accepting a better monetary offer if the likelihood of my personal intellectual growth is hindered by it.</p>

            <p>The timeframe is of importance, of course. The calculation should be made with the following in mind:</p>

            <ul>
              <li>
                <p>First 30-40 years of my life should primarily be towards building intellect. Through information, interactions, and experiences. Learning how to learn should be the priority, as learning shouldn't stop but become a habit and ongoing practice past this first stage.</p>
              </li>
              <li>
                <p>Capitalistic success will help with enabling me to learn more, so it should be considered that if within a reasonable timeline (2-5 years) there will be a step function difference in my freedom then I should commit to that task.</p>
              </li>
              <li>
                <p>Building a company in itself is a learning vessel and an exercise of understanding human behavior and economic behavior.</p>
              </li>
            </ul>
          </OperatingModel.Content>
        </OperatingModel>

        {/*
        <OperatingModel name='moral-absolutes'>
          <OperatingModel.Title workInProgress>
            My World Has Moral Absolutes
          </OperatingModel.Title>

          <p>It’s a rather easy argument to make that there are no blanket true moral absolutes. All the privileges, rights, and abilities we have in the 21st century (some of us more than others) were created and decided on in humanity’s common imagination over centuries of conflict. All rights are debatable, all rules are breakable.</p>

          <p>But that doesn’t mean that there aren’t some of which I truly agree with and would like to live by to consider myself a righteous human.</p>
          <OperatingModel.Content>
            <p><strong>I will have a life-long pursuit to define moral absolutes for myself in a thoughtful, intentional, and systematic way.</strong></p>

            <p>It would be rather naive of me to assume that I already know what all my moral absolutes are, and attempt to write them down in a simple document like this. It’s far more realistic to attempt to arrive at such a list through rigorous debate, learning, and understanding over likely a multi-decade period. That’s my commitment.</p>
          </OperatingModel.Content>
        </OperatingModel>
        */}
      </div>
    );
  }
}
