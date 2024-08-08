// --------------------------------------------------------------------------
// ✅ ExpandableText 컴포넌트
// --------------------------------------------------------------------------
// - [ ] `text` 속성(prop) 길이에 따라 확장 가능한 텍스트 렌더링
// - [ ] `limit` 속성(기본 값: 255) 값보다 `text` 길이가 짧은 경우 텍스트만 표시
// - [ ] `limit` 속성 값보다 `text` 길이가 긴 경우 텍스트 말줄임(...) 표시
// - [ ] `limit` 속성 값보다 `text` 길이가 긴 경우 확장 or 축소 버튼 표시
// - [ ] 확장 or 축소 버튼을 사용자가 클릭하면 텍스트 확장 또는 축소되어 표시
// --------------------------------------------------------------------------

import { string, number } from 'prop-types';
import { useState } from 'react';

ExpandableText.propTypes = {
  children: string.isRequired,
  limit: number,
};

function ExpandableText({ children, limit = 255 }) {
  const [isExpand, setIsExpand] = useState(false);

  const isExpandable = children.length > limit;

  let renderText = children;

  if (isExpandable) {
    renderText = children.slice(0, limit) + '...';
  }

  const buttonLabel = isExpand ? '축소' : '확장';

  const handleExpand = () => {
    const nextExpandValue = !isExpand;
    setIsExpand(nextExpandValue);
  };

  return (
    <div className="ExpandableText">
      <p>{isExpand ? children : renderText}</p>
      {isExpandable && (
        <button type="button" onClick={handleExpand}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
}

export default ExpandableText;
