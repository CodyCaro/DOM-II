const blockHolder = document.querySelector(".blocks");

class Block {
  constructor(blockElement) {
    this.blockElementProperty = blockElement;
    this.amountMoved = 0;
    this.canMove = false;
    this.moveAmount = 15;

    this.blockElementProperty.addEventListener(
      "click",
      this.moveToTop.bind(this)
    );

    this.blockElementProperty.addEventListener(
      "mousedown",
      this.moveRight.bind(this)
    );

    addEventListener("mouseup", this.stopMovement.bind(this));
  }

  moveToTop() {
    blockHolder.insertBefore(this.blockElementProperty, blocks[0]);
    this.reorderBlocks();
  }

  reorderBlocks() {
    blocks = document.querySelectorAll(".block");
  }

  moveRight() {
    this.canMove = true;
    window.setInterval(this.move.bind(this), 100);
  }

  move() {
    if (this.canMove) {
      this.amountMoved -= this.moveAmount;

      this.blockElementProperty.style.position = "relative";
      this.blockElementProperty.style.right = `${this.amountMoved}px`;
    }
  }

  stopMovement() {
    this.canMove = false;
  }
}

let blocks = document.querySelectorAll(".block");

blocks.forEach(blockElement => {
  return new Block(blockElement);
});
