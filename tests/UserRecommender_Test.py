import unittest
# import the is_prime function
import algo
#from algo import UserRecommender


class TestMatches(unittest.TestCase):
    def test_155(self):
        self.assertTrue(len(algo.UserRecommender(155)) == 11)

    def test_166(self):
        self.assertTrue(len(algo.UserRecommender(166)) == 11)

    def test_142(self):
        self.assertTrue(len(algo.UserRecommender(142)) == 11)

    def test_189(self):
        self.assertTrue(len(algo.UserRecommender(189)) == 11)


if __name__ == '__main__':
    unittest.main()
