declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;

  export let title: string;
  export let description: string;
}
