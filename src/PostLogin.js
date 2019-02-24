import React, { Component } from "react";


class PostLogin extends Component{
    constructor(props){
        super(props);
      }
    render() {
        return (
           <div> 
            <div>
                <ul class="nav nav-pills nav-justified">
                    <li class="nav-item">
                        <a class="nav-link active" href="#!">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#!">Longer nav link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#!">Link</a>
                    </li>
                </ul>

                <ul class="nav nav-pills nav-justified">
                    <li class="nav-item">
                        <a class="nav-link active" href="#!">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#!">Longer nav link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#!">Link</a>
                    </li>
                </ul>
            </div>

        <div>
            <div class="list-group">
                <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </a>
                <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small class="text-muted">Donec id elit non mi porta.</small>
                </a>
                <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small class="text-muted">Donec id elit non mi porta.</small>
                </a>
            </div>

        </div>
        </div>
        );
    }
}

export default PostLogin;