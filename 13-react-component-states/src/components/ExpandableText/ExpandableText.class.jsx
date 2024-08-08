// --------------------------------------------------------------------------
// ✅ ExpandableText 컴포넌트
// --------------------------------------------------------------------------
// - [ ] `text` 속성(prop) 길이에 따라 확장 가능한 텍스트 렌더링
// - [ ] `limit` 속성(기본 값: 255) 값보다 `text` 길이가 짧은 경우 텍스트만 표시
// - [ ] `limit` 속성 값보다 `text` 길이가 긴 경우 텍스트 말줄임(...) 표시
// - [ ] `limit` 속성 값보다 `text` 길이가 긴 경우 확장 or 축소 버튼 표시
// - [ ] 확장 or 축소 버튼을 사용자가 클릭하면 텍스트 확장 또는 축소되어 표시
// --------------------------------------------------------------------------

import { Component } from 'react';
import { node, number } from 'prop-types';

class ExpandableText extends Component {
  static propTypes = {
    children: node.isRequired,
    limit: number,
  };

  static defaultProps = {
    limit: 255,
  };

  state = {
    isExpand: false,
  };

  render() {
    const { isExpand } = this.state;
    const { children, limit, ...restProps } = this.props;

    let renderText = children;

    const isExpandable = children.length > limit;

    if (isExpandable) {
      renderText = children.toString().slice(0, limit) + '...';
    }

    const buttonLabel = isExpand ? '축소' : '확장';

    return (
      <div className="ExpandableText" {...restProps}>
        <p>{isExpand ? children : renderText}</p>
        {isExpandable && (
          <button type="button" onClick={this.handleExpand}>
            {buttonLabel}
          </button>
        )}
      </div>
    );
  }

  handleExpand = () => {
    this.setState({
      isExpand: !this.state.isExpand,
    });
  };
}

export default ExpandableText;
