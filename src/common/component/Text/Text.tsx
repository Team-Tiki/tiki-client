interface TextProps {
  children: ReactNode;
}

const Text = ({ children }: TextProps) => {
  return <>{children}</>;
};

export default Text;
