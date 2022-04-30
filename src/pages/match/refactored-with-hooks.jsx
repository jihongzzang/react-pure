import { useRef, useState } from 'react';
import { createMockCard, checkIsMatched } from './utils';
import { commonStyles, pageStyles } from './styles';

const useForceUpdate = () => {
  const [, render] = useState(0);

  return () => render(i => i + 1);
}; //함수형 컴포넌트에서 강제로 업데이트 하는 훅 선호하진 않는다.

const MatchPage = () => {
  const forceUpdate = useForceUpdate();
  const [currentCard, setCurrentCard] = useState(createMockCard());
  const { current: matches } = useRef([]);

  // const [matches, setMatches] = useState([]);

  const next = () => {
    setCurrentCard(createMockCard());
  };

  const like = () => {
    next();

    checkIsMatched().then(({ data: { isMatched } }) => {
      if (isMatched) {
        // setMatches([currentCard, ...matches]);
        matches.unshift(currentCard);
        forceUpdate();
      }
    });
  };

  return (
    <main style={commonStyles.flexCenter}>
      <section style={pageStyles.pageWrap}>
        <img src="images/logo.png" alt="logo" style={pageStyles.logo} />
        <MatchCard style={commonStyles.flex1} card={currentCard} />
        <MatchController next={next} like={like} />
        <MatchList matches={matches} />
      </section>
    </main>
  );
};

const MatchCard = ({ card: { image, name, age, company, education } }) => {
  return (
    <div style={pageStyles.matchCardRoot}>
      <div style={pageStyles.matchCardImageWrap}>
        <img style={pageStyles.matchCardImage} src={image} alt="profile" />
      </div>
      <div style={commonStyles.flex}>
        <div style={commonStyles.flex1}>Name: {name}</div>
        <div style={commonStyles.flex1}>Age: {age}</div>
      </div>
      <div style={commonStyles.flex}>
        <div style={commonStyles.flex1}>Company: {company}</div>
        <div style={commonStyles.flex1}>Education: {education}</div>
      </div>
    </div>
  );
};

const MatchList = ({ matches }) => {
  return (
    <div style={pageStyles.matchLogRoot}>
      {matches.map(matchedCard => (
        <div key={matchedCard.id}>
          {matchedCard.name} ({matchedCard.age}) also liked your pictur!
        </div>
      ))}
    </div>
  );
};

const MatchController = ({ next, like }) => {
  return (
    <div style={pageStyles.matchControllerRoot}>
      <button style={pageStyles.matchButton} onClick={next}>
        skip
      </button>
      &nbsp;
      <button style={pageStyles.matchButton} onClick={like}>
        Like
      </button>
    </div>
  );
};

export default MatchPage;
