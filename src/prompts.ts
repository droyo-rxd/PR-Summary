export const initialPrompt = (props: {
  title: string
  body: string
  patch_url: string
}): string =>
  `Pull Request Summary: Title: ${props.title} Description: ${
    props.body || ''
  } Diff: ${props.patch_url}`

export const pythonPrompt = (props: {title: string; patch: string}): string =>
  `Write a pull request description focusing on the motivation behind the change and why it improves the project.
    Make it straight to the point.
    Be as technical as you need.
    Provide context if needed.
    Add a joke.
    Add some tips for the QAs who are going to test this.
    The title of the pull request is "${props.title}" and the following changes took place: \n  Diff: ${props.patch}`
