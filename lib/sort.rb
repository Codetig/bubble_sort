class Array

  def bubble_sort
    i = 0
    while i < self.length do
      k = 0
      while k < self.length - 1 do
        if self[k] > self[k + 1] && k < self.length
          self[k], self[k + 1] = self[k + 1], self[k]
        end
        k += 1
      end
      i += 1
    end
    return self
  end
end