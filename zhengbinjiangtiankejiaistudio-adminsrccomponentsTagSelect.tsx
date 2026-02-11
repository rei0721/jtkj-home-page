import { Select } from 'antd';

interface TagSelectProps {
  value?: number[];
  onChange?: (tagIds: number[]) => void;
  tags: Array<{ id: number; name: string; color?: string }>;
}

export default function TagSelect({ value, onChange, tags }: TagSelectProps) {
  const options = tags.map((tag) => ({
    label: tag.name,
    value: tag.id,
  }));

  return (
    <Select
      mode="multiple"
      placeholder="请选择标签"
      value={value}
      onChange={onChange}
      options={options}
      optionFilterProp="label"
      style={{ width: '100%' }}
      allowClear
      optionRender={(option) => {
        const tag = tags.find((t) => t.id === option.value);
        return (
          <span>
            {tag?.color && (
              <span
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: tag.color,
                  marginRight: 6,
                  verticalAlign: 'middle',
                }}
              />
            )}
            {option.label}
          </span>
        );
      }}
    />
  );
}
