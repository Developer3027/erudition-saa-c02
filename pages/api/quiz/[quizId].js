import { quizsData } from '../../../data/quizsData';

export default function handler(req, res) {
  const { quizId } = req.query;
  const quiz = quizsData.find((quiz) => quiz.id === quizId);
  res.status(200).json(quiz);
}
