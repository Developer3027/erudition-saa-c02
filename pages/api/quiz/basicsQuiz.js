import { basicsQuiz } from '../../../data/QuizData';

export default function handler(req, res) {
  res.status(200).json(basicsQuiz);
}
