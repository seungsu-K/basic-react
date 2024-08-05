import ExpandableText from './components/ExpandableText';
import TermAndConditions from './components/TermAndCondition';

function Playground() {
  return (
    <>
      <TermAndConditions />
      <ExpandableText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati eius
        laboriosam sit est voluptatem necessitatibus nam quibusdam aperiam, id
        deserunt at cumque voluptate quisquam laudantium temporibus! Magnam iste
        voluptate labore! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Numquam, animi voluptatibus rerum enim facere tenetur quaerat
        atque nulla dolores! Facere nobis odio nam deserunt cum labore modi
        accusamus porro fugit.
      </ExpandableText>
      <ExpandableText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quam
        quibusdam facere, accusamus deserunt id quo debitis voluptatem impedit.
        In omnis adipisci ad maiores possimus ea laboriosam corporis excepturi
        quas?
      </ExpandableText>
      <ExpandableText limit={100}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quam
        quibusdam facere, accusamus deserunt id quo debitis voluptatem impedit.
        In omnis adipisci ad maiores possimus ea laboriosam corporis excepturi
        quas?
      </ExpandableText>
    </>
  );
}

export default Playground;
