import { QuoteOpen } from '@gravity-ui/icons';

interface DescriptionBlockProps {
  text: string;
}

export default function DescriptionBlock({ text }: DescriptionBlockProps) {
  return (
    <div className="text-white px-4 pt-6 text-sm font-normal flex gap-2 items-start leading-relaxed">
      <QuoteOpen className="min-w-4 w-4 h-4 mt-1 opacity-80" />
      <p className="whitespace-pre-line">{text}</p>
    </div>
  );
}
