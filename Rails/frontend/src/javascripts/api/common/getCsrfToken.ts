export default function getCsrfToken(): string | undefined {
  const token = document.querySelector<HTMLMetaElement>(
    'meta[name="csrf-token"]'
  );
  if (!token) {
    return;
  }

  return token.content;
}
