import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type PropsType = {
  setFormData: React.Dispatch<
    React.SetStateAction<{
      sort: string;
      tagsNumber: number;
      order: string;
    }>
  >;
  id: string;
  label: string;
  placeholder: string | number;
  selectItems: { value: string; name: string }[];
};

const FilterSelect = ({
  setFormData,
  id,
  label,
  placeholder,
  selectItems,
}: PropsType) => {
  return (
    <div className='flex flex-col space-y-1.5'>
      <Label htmlFor={id}>{label}</Label>
      <div className='w-[150px]'>
        <Select
          onValueChange={(e) => setFormData((prev) => ({ ...prev, [id]: e }))}>
          <SelectTrigger id={id}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent position='popper'>
            {selectItems.map((item) => (
              <SelectItem value={item.value} key={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterSelect;
