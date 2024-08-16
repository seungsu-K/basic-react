import { useId, useImperativeHandle, useRef } from 'react';
import S from './ChatWindow.module.css';
import { any, arrayOf, bool, exact, func, string } from 'prop-types';

const MessageType = exact({
  id: string.isRequired,
  message: string.isRequired,
  isMe: bool.isRequired,
});

const MessageListType = arrayOf(MessageType);

ChatWindowRef.propTypes = {
  messages: MessageListType.isRequired,
  onAddMessage: func,
  _ref: exact({
    current: any,
  }),
};

function ChatWindowRef({ _ref, messages, onAddMessage }) {
  const id = useId();
  const textareaRef = useRef(null);
  const olRef = useRef(null);

  useImperativeHandle(_ref, () => {
    // 명령형 핸들을 생성
    // [상위 컴포넌트 누군가에게] 끌어내려진다.
    const scrollDownList = () => {
      const ol = olRef.current;
      setTimeout(() => ol.scrollTo(0, ol.scrollHeight));
    };

    // 생성한 명령형 핸들을 상위 컴포넌트에 노출(공개)
    return {
      scrollDownList,
    };
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let newMessage = formData.get('message');
    newMessage = newMessage.trim();

    SendMessage(newMessage);
  };

  const SendMessage = (newMessage) => {
    const textarea = textareaRef.current;

    if (newMessage.length <= 0) {
      alert('메시지 내용을 입력하세요!');
      textareaRef.current.select();
      return;
    }

    onAddMessage?.(newMessage);
    textarea.value = '';
  };

  const handleKeyDown = (e) => {
    const { key, shiftKey } = e;

    if (key === 'Enter' && !shiftKey) {
      e.preventDefault();
      const newMessage = e.currentTarget.value.trim();
      SendMessage(newMessage);
    }
  };

  return (
    <section className={S.component}>
      <h2 className="sr-only">채팅 화면</h2>

      <ol ref={olRef} className={S.chats}>
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

export default ChatWindowRef;
