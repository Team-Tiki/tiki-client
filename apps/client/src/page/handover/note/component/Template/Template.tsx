import { Button, Input, Label, scrollStyle } from '@tiki/ui';

import { layoutStyle, noteWrapperStyle } from '@/page/handover/note/component/Template/Template.style';
import { TEMPLATE } from '@/page/handover/note/constants/template';

import { $api } from '@/shared/api/client';

const Template = () => {
  // const handleChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValues((prev) => ({
  //     ...prev,
  //     [id]: event.target.value,
  //   }));
  // };

  const { mutate } = $api.useMutation('post', '/api/v1/notes/template');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log('Submitted values:', values);

    // mutate({ body: values });
  };

  return (
    <form css={[noteWrapperStyle, scrollStyle]} onSubmit={handleSubmit}>
      {TEMPLATE.map((item) => (
        <div css={layoutStyle} key={item.id}>
          <Label id={item.id}>{item.QUESTION}</Label>
          <Input
            id={item.id}
            placeholder={item.PLACEHOLDER}
            // value={values[item.id as keyof typeof values]}
            // onChange={handleChange(item.id)}
          />
        </div>
      ))}

      <Button type="submit" css={{ marginTop: '1rem' }}>
        제출하기
      </Button>
    </form>
  );
};

export default Template;
