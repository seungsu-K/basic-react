import { useId, useRef } from 'react';
import S from './ChatWindow.module.css';
import { arrayOf, bool, exact, func, string } from 'prop-types';

const MessageType = exact({
  id: string.isRequired,
  message: string.isRequired,
  isMe: bool.isRequired,
});

const MessageListType = arrayOf(MessageType);

ChatWindow.propTypes = {
  messages: MessageListType.isRequired,
  onAddMessage: func,
};

function ChatWindow({ messages, onAddMessage }) {
  const id = useId();
  const textareaRef = useRef(null);
  const olRef = useRef(null);

  

  const handleSendMessage = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let newMessage = formData.get('message');
    newMessage = newMessage.trim();

    SendMessage(newMessage);
  };

  const SendMessage = (newMessage) => {
    const textarea = textareaRef.current;
    const ol = olRef.current;

    if (newMessage.length <= 0) {
      alert('메시지 내용을 입력하세요!');
      textareaRef.current.select();
      return;
    }

    onAddMessage?.(newMessage);
    textarea.value = '';

    // 스크롤 끝까지 내리기
    // React가 렌더링하기 이전에 실행되기 떄문에 useEffect를 사용해야하지만
    // 아직 배우기 전이라 timer 사용
    scrollDownList(ol);
  };

  const handleKeyDown = (e) => {
    const { key, shiftKey } = e;

    if (key === 'Enter' && !shiftKey) {
      e.preventDefault();
      const newMessage = e.currentTarget.value.trim();
      SendMessage(newMessage);
    }
  };

  const scrollDownList = (el) => {
    if (el) {
      setTimeout(() => el.scrollTo(0, el.scrollHeight));
    }
  };

  const mountedCallback = (el) => {
    olRef.current = el;
    scrollDownList(el);
  };

  return (
    <section className={S.component}>
      <h2 className="sr-only">채팅 화면</h2>

      <ol ref={mountedCallback} className={S.chats}>
        {messages.map(({ id, isMe, message }) => {
          const classNames = `${S.chat} ${isMe ? S.me : ''}`.trim();

          return (
            <li key={id} className={classNames}>
              {message}
            </li>
          );
        })}
      </ol>

      <form className={S.form} onSubmit={handleSendMessage}>
        <div className={S.messageBox}>
          <label htmlFor={id} className="sr-only">
            메시지 입력
          </label>
          <textarea
            ref={textareaRef}
            id={id}
            name="message"
            onKeyDown={handleKeyDown}
          />
        </div>
        <button type="submit">보내기</button>
      </form>
    </section>
  );
}

export default ChatWindow;
