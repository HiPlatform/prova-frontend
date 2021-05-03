import { Container } from './styles';

interface CheckboxProps {
  id?: string;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
}) => {
  return (
    <Container>
      <input
        id={id}
        data-testid={id}
        checked={checked}
        type="checkbox"
        onChange={onChange}
        onInput={onChange}
      />
      <span>
        <svg width="15px" height="15px">
          <polyline points="1.5 6 4.5 9 10.5 1" />
        </svg>
      </span>
    </Container>
  );
};
