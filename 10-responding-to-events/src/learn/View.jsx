import Headline from './Headline';
import JSX_Markup from './html-vs-jsx-markup/jsx-markup';
import EventHandlerProp from './responding-to-events/event-handler-prop';
import EventPropagation from './responding-to-events/event-propagation';
import EventWithSideEffects from './responding-to-events/event-with-side-effects';

function RespondingToEvents() {
  // 함수 지역 변수(데이터)
  let message = 'message';

  // 함수 지역 함수(데이터)
  // const printMessage = () => {
  //   console.log(message);
  // };

  const updateMessage = (addMessage) => {
    message += addMessage;
    console.log(message);
  };

  return (
    <div className="ViewRespondingToEvent">
      <h1>이벤트에 응답</h1>
      <p>사용자와 상호작용하도록 이벤트를 구성합니다.</p>
      <hr />
      <EventHandlerProp onPrintMessage={updateMessage} />
      <hr />
      <EventPropagation />
      <hr />
      <EventWithSideEffects />
    </div>
  );
}

function HTMLvsJSX() {
  return (
    <div className="ViewHTMLvsJSX" hidden>
      <Headline />
      <hr />
      <JSX_Markup />
    </div>
  );
}

// --------------------------------------------------------------------------

function View() {}

View.HTMLvsJSX = HTMLvsJSX;
View.RespondingToEvents = RespondingToEvents;

export default View;