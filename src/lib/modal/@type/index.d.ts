type NotPropsModal = {
  id: string;
  backgroundCloseable?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};
export type PartialPropsModal = Partial<NotPropsModal>;
export type ModalProps<T, K> = Omit<Parameters<T>[0], "id"> extends K
  ? [] | [PartialPropsModal]
  : [PartialPropsModal & { props: Omit<Parameters<T>[0], "id"> }];

type Modal = {
  open<T>(component: T, ...args: ModalProps<T, Parameters<T>[0]>): string;
  close(id?: string): void;
  clear(): void;
};

export interface ModalRoot<T = any> {
  (props: { id: string } & T): JSX.Element;
}
